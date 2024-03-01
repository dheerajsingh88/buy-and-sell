import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-listing-details-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listing-details-page.component.html',
  styleUrl: './listing-details-page.component.css'
})
export class ListingDetailsPageComponent implements OnInit{
  listing: Listing | undefined;
  isLoading: boolean = true;

  constructor( private route: ActivatedRoute,
    private listingsService: ListingsService, ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
    this.listingsService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
        this.isLoading = false;
      });
    this.listingsService.addViewToListing(id)
      .subscribe(() => console.log('Views updated!'));
    }
  }
}
