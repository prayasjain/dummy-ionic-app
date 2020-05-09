import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes : Recipe[] = [
    {
      id: 'r1',
      title: 'First Item',
      imageUrl: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*',
      ingredients: ['cute', 'cat']
    },
    {
      id: 'r2',
      title: 'Second Item',
      imageUrl: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/people_foods_cats_can_eat_slideshow/thinkstock_rf_photo_of_cat_sitting_at_table.jpg',
      ingredients: ['another cute', 'cat!']
    },
  ];

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: string) {
    return {
      ...this.recipes.find(recipe=> {
      return recipe.id === id;
    })};
  }

  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter( recipe => {
      return recipe.id !== id;
    })
  }


  constructor() { }
}
