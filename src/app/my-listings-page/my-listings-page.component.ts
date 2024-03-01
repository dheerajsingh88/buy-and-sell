import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-my-listings-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) { }

  ngOnInit(): void {
    this.listingsService.getListingsForUser()
    .subscribe(listings => this.listings = listings);
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId)
    .subscribe(() => {
      this.listings = this.listings.filter(
        listing => listing.id !== listingId
      );
    });
  }
}
