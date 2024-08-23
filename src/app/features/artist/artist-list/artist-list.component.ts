import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/core/services/artist.service';
import { Artist } from 'src/app/core/models/artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    const token = 'your_access_token_here';
    this.artistService.getTopArtists(token).subscribe(
      (data) => {
        this.artists = data;
      },
      (error) => {
        console.error('Error fetching artists', error);
      }
    );
  }
}
