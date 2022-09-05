import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from './../../_services/user.service';
import { AlertifyService } from './../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertif: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
      console.log(this.user);
    });

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryImages = this.getImages();
  }

  getImages(){
    const imagesUrls = [];
    for(let i = 0; i < this.user.photos.$values.length; i++){
      imagesUrls.push({
        small: this.user.photos.$values[i].url,
        medium: this.user.photos.$values[i].url,
        big: this.user.photos.$values[i].url,
        description: this.user.photos.$values[i].description
      });
    }

    return imagesUrls;
  }


  //loadUser(){
  //  this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
  //    this.user = user;
  //    console.log(user);
  //  }, error =>{
  //    this.alertif.error(error);
  //  });
  //}
}
