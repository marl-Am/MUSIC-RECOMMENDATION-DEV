import os
import spotipy
from flask import Flask, jsonify, render_template, request, session
from spotipy.oauth2 import SpotifyClientCredentials
from dotenv import load_dotenv

app = Flask(__name__)

# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

# Get Spotify API credentials from environment variables
CLIENT_ID = os.getenv('SPOTIFY_CLIENT_ID')
CLIENT_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')

# Set up Spotify API client
auth_manager = SpotifyClientCredentials(client_id=CLIENT_ID,client_secret=CLIENT_SECRET)

sp = spotipy.Spotify(auth_manager=auth_manager)

@app.route('/', methods=['GET'])
def index():
    if request.method == 'GET':
        return render_template('index.html')

    
@app.route('/get_recommendations', methods=['POST'])
def get_recommendations():
    if request.method == 'POST':
        # Get the artist's name from the frontend
        artist_name = request.json.get('artist_name')

        # Check if the name is valid
        if not artist_name:
            error_message = 'Invalid artist name.'
            return jsonify({'error': error_message})

        # Search for the artist
        results = sp.search(q=artist_name, type='artist', limit=1)
        if len(results['artists']['items']) == 0:
            error_message = f"No artist found with the name '{artist_name}'."
            return jsonify({'error': error_message})

        else:
            # Get the artist ID
            artist = results['artists']['items'][0]
            artist_id = artist['id']
            artist_name = artist['name']

            # Get a list of similar artists
            try:
                related_artists = sp.artist_related_artists(artist_id)
                similar_artists = []
                for artist in related_artists['artists']:
                    similar_artist = {
                        'id': artist['id'],
                        'name': artist['name'],
                        'image_url': artist['images'][0]['url'] if artist['images'] else None
                    }
                    similar_artists.append(similar_artist)
            except Exception as e:
                error_message = f"An error occurred while retrieving similar artists: {str(e)}"
                return jsonify({'error': error_message})

            # print("Successful search...")
            return jsonify(similar_artists=similar_artists)


    return jsonify({})

if __name__ == "__main__":
    app.run(debug=True)
