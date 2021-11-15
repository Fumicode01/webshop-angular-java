package com.code.springbootecommerce.service;

import com.code.springbootecommerce.dto.Purchase;
import com.code.springbootecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
