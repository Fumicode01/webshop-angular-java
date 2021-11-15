package com.code.springbootecommerce.dto;


import com.code.springbootecommerce.entity.Address;
import com.code.springbootecommerce.entity.Customer;
import com.code.springbootecommerce.entity.Order;
import com.code.springbootecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
