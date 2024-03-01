import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) { }

  ngOnInit(): void {
    alert('inside listing page')
    this.listingsService.getListings().subscribe(listings => this.listings = listings);
    }

}
