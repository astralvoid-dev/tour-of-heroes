import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service';
import { MessageService } from '../message-service';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes implements OnInit {
  heroes: Hero[] = [];
  
  constructor(private heroService : HeroService, private messageService : MessageService) {}
  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
}
