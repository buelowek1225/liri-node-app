## Liri-Node-App

**Project:** Liri
**Goal of this Project:** Make a Liri! Liri is like iPhone's Siri. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

**Created by:** Ellen Buelow

**APIs to use:** Bands in Town, Spotify, OMDB

**Directions:** Liri allows you to search for concerts, songs, and movie information. Use the format below to begin a search:

    *node liri.js  'command' 'search-parameter'*

    *example: node liri.js  movie-this titanic*

Command Options:
1. concert-this
2. spotify-this-song
3. movie-this
4. do-what-it-says 
   *(this options works well if you have a text file with the command promt and your search parameter listed and separated by a comma.)*

**Proof of functionality:**
    **Examples of User Flow Path:**
        **Spotify:**
            search: *node liri.js spotify-this-song despacito*
            screen-shot of code: ![](images/ex.2_spotify_despacito.jpg)
        **Bands in Town:**
            search: *node liri.js concert-this pink*
            screen-shot of code: ![](images/ex.1_concert_pink.jpg)
        **OMDB:**
            search: *node liri.js movie-this Up*
            screen-shot of code: ![](images/ex.3_movie_up.jpg)
        **Text File Import Option:**
        search: *node do-what-it-says *
        screen-shot of code: ![](images/ex.4_dowhatitsays.jpg)


