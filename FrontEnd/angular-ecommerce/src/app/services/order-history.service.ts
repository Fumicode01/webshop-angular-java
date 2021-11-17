import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistory } from '../common/order-history';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

    private orderUrl = 'http://localhost:8080/api/orders';


  constructor(private httpClient:HttpClient) { }

  getOrderHisotry(theEmail:string): Observable<GetResponseOrderHistory>{

    // need to build URL based on the customer email
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmail?email=${theEmail}`;

    return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl);
  }
}


interface GetResponseOrderHistory {
    _embedded:{
        orders: OrderHistory[];
    }
}