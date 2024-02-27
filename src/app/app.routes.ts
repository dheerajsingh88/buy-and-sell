import { Routes } from '@angular/router';
import { ListingsPageComponent } from './listing-page/listing-page.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

export const routes: Routes = [
    { path: '', redirectTo : '/listings', pathMatch: "full"},
    { path: 'listings', component : ListingsPageComponent, pathMatch: "full"},
    { path: 'listings/:id', component : ListingDetailsPageComponent},
    { path: 'contact/:id', component : ContactPageComponent},
    { path: 'edit-listings/:id', component : EditListingPageComponent},
    { path: 'my-listings', component : MyListingsPageComponent},
    { path: 'new-listings', component : NewListingPageComponent}
];