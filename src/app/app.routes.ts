import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { PhotosGalry } from './components/photos-galry/photos-galry';
import { Blogs } from './components/blogs/blogs';
import { Contact } from './components/contact/contact';
import { VideosGalry } from './components/videos-galry/videos-galry';
import { RoomDetails } from './components/room-details/room-details';
import { Cart } from './components/cart/cart';
import { Signin } from './components/signin/signin';
import { Signup } from './components/signup/signup';
import { Checkout } from './components/checkout/checkout';

export const routes: Routes = [
    {path:'' , component: Home},
    {path:'home' , component: Home},
    {path:'about-us' , component: Aboutus},
    {path:'photo-gallery' , component: PhotosGalry},
    {path:'blogs' , component: Blogs},
    {path:'contact' , component: Contact},
    {path:'video-gallery' , component: VideosGalry},
    {path:'room-details/:id' , component: RoomDetails},
    {path:'cart' , component: Cart},
    {path:'signin' , component: Signin},
    {path:'signup' , component: Signup},
    {path:'checkout' , component: Checkout}
];
