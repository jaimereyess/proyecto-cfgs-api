-- Create schema for our hotel reservation system
CREATE SCHEMA hotel_reservation;
SET search_path TO hotel_reservation;

-- Enable UUID generation extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";  

-- Table for users
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Table for hotels
CREATE TABLE hotels (
    hotel_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    description TEXT,
    images TEXT[] DEFAULT ARRAY[]::TEXT[],
    breakfast_included BOOLEAN DEFAULT false,
    stars INT NOT NULL,
    rating DECIMAL(2, 1) NOT NULL
);

-- Table for rooms
CREATE TABLE rooms (
    room_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    hotel_id UUID REFERENCES hotels(hotel_id) ON DELETE CASCADE,
    quantity INT NOT NULL,
    free_quantity INT NOT NULL,
    max_guests INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    has_air_conditioning BOOLEAN DEFAULT false,
    has_terrace BOOLEAN DEFAULT false, 
    has_tv BOOLEAN DEFAULT false, 
    has_wifi BOOLEAN DEFAULT false,
);

-- Table for reservations
CREATE TABLE reservations (
    reservation_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
    room_id UUID REFERENCES rooms(room_id) ON DELETE CASCADE,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

-- Insert data for car renting
CREATE TABLE cars (
    car_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    brand VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    images TEXT[] DEFAULT ARRAY[]::TEXT[],
    has_air_conditioning BOOLEAN DEFAULT false,
    has_gps BOOLEAN DEFAULT false,
    has_automatic_transmission BOOLEAN DEFAULT false
);

-- Insert data for actities
CREATE TABLE activities (
    activity_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL, 
    description TEXT,
    images TEXT[] DEFAULT ARRAY[]::TEXT[],
    price DECIMAL(10, 2) NOT NULL
);

-- Insert data for flights
CREATE TABLE flights (
    flight_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    airline VARCHAR(50) NOT NULL,
    departure_airport VARCHAR(50) NOT NULL,
    arrival_airport VARCHAR(50) NOT NULL,
    departure_date TIMESTAMP NOT NULL,
    arrival_date TIMESTAMP NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE airports (
    airports_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    airport_code VARCHAR(10) UNIQUE NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL
);