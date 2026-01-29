import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { PhotosGalry } from './components/photos-galry/photos-galry';
import { Blogs } from './components/blogs/blogs';
import { Contact } from './components/contact/contact';
import { VideosGalry } from './components/videos-galry/videos-galry';

export const routes: Routes = [
    {path:'' , component: Home},
    {path:'home' , component: Home},
    {path:'about-us' , component: Aboutus},
    {path:'photo-gallery' , component: PhotosGalry},
    {path:'blogs' , component: Blogs},
    {path:'contact' , component: Contact},
    {path:'video-gallery' , component: VideosGalry}

];
