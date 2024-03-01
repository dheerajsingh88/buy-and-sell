import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-new-listing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ListingDataFormComponent],
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css'],
})
export class NewListingPageComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: string = '';

  constructor(
    private router: Router,
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit({ name, description, price }: { name: string, description: string, price: number }): void {
    this.listingsService.createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }
}
