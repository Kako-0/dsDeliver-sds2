package com.devsuperior.dsdeliver.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

public class Order implements Serializable{

    private static final long serialVersionUID = 1L;

    private Long id;
    private String address;
    private Double latitude;
    private Double longitude;
    private Instant moment;
    private OrderStatus status;
    private Double total;

    private Set<Product> products = new HashSet<>();

    public Order() {
    }

    public Order(Long id, String address, Double latitude, Double longitude, Instant moment, OrderStatus status,
            Double total) {
        this.setId(id);
        this.setAddress(address);
        this.setLatitude(latitude);
        this.setLongitude(longitude);
        this.setMoment(moment);
        this.setStatus(status);
        this.setTotal(total);
    };

    public Set<Product> getProducts() {
        return products;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public Instant getMoment() {
        return moment;
    }

    public void setMoment(Instant moment) {
        this.moment = moment;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    
    public int hasCode(){
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        
        return result;
    }

    @Override
    public boolean equals(Object obj){
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Order other = (Order) obj;
        if (id == null){
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;       
    }
    
}
