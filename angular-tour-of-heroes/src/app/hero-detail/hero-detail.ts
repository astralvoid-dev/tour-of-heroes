import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero-service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  standalone: false,
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetail implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ){};

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  @Input() hero?: Hero;
}
