import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../services/listings.service';
import { CommonModule } from '@angular/common';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';

@Component({
  selector: 'app-edit-listing-page',
  standalone: true,
  imports: [CommonModule, ListingDataFormComponent],
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent {
  listing: Listing | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.listingsService.getListingById(id)
        .subscribe(listing => this.listing = listing);
    }
  }

  onSubmit({ name, description, price }: { name: string, description: string, price: number }): void {
    if (this.listing !== undefined) {
      this.listingsService.editListing(this.listing.id, name, description, price)
        .subscribe(() => {
          this.router.navigateByUrl('/my-listings');
        });
    }
  }
}
