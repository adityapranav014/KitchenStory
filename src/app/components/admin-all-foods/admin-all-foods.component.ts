import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-admin-all-foods',
  templateUrl: './admin-all-foods.component.html',
  styleUrls: ['./admin-all-foods.component.css']
})
export class AdminAllFoodsComponent implements OnInit {

  foods: Food[] = [];
  constructor( private foodService: FoodService,) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
  
  deleteFood(food: Food) {
    this.foodService.deleteFood(food.id);
    this.foods = this.foodService.getAll();
  }

}
