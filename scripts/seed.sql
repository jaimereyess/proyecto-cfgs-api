-- Insertar datos ficticios de usuarios
INSERT INTO users (username, email, password) VALUES
    ('user1', 'user1@example.com', 'password1'),
    ('user2', 'user2@example.com', 'password2'),
    ('user3', 'user3@example.com', 'password3');

-- Insertar datos ficticios de hoteles en Gran Canaria
INSERT INTO hotels (name, location, description) VALUES
    ('Sunset Resort', 'Playa del Inglés, Gran Canaria', 'Un lujoso complejo hotelero ubicado en la famosa Playa del Inglés, con vistas impresionantes al océano Atlántico.'),
    ('Palm Oasis Maspalomas', 'Maspalomas, Gran Canaria', 'Un tranquilo oasis tropical situado en el corazón de Maspalomas, con jardines exuberantes y piscinas relucientes.'),
    ('Seaside Grand Hotel Residencia', 'Meloneras, Gran Canaria', 'Un hotel exclusivo de estilo colonial ubicado en la prestigiosa zona de Meloneras, ofreciendo un ambiente de lujo y servicio de primera clase.'),
    ('Lopesan Costa Meloneras Resort', 'Meloneras, Gran Canaria', 'Un resort de cinco estrellas situado frente al mar, con una amplia gama de instalaciones y servicios para unas vacaciones inolvidables.'),
    ('Hotel Riu Palace Oasis', 'Maspalomas, Gran Canaria', 'Un elegante hotel de estilo canario rodeado de palmeras y situado a pocos pasos de las dunas de Maspalomas.'),
    ('Cordial Mogan Playa', 'Puerto de Mogán, Gran Canaria', 'Un encantador complejo de estilo colonial rodeado de exuberantes jardines subtropicales, ideal para unas vacaciones relajantes junto al mar.'),
    ('Radisson Blu Resort & Spa', 'Puerto de Mogán, Gran Canaria', 'Un lujoso resort frente al océano con un spa de clase mundial y una amplia gama de actividades para toda la familia.'),
    ('Lopesan Baobab Resort', 'Meloneras, Gran Canaria', 'Un resort de lujo inspirado en África, con impresionantes piscinas, exuberantes jardines y una variedad de restaurantes temáticos.'),
    ('Gloria Palace Amadores Thalasso & Hotel', 'Puerto Rico, Gran Canaria', 'Un hotel de bienestar y thalasso con vistas panorámicas al océano Atlántico, ideal para unas vacaciones de relax y rejuvenecimiento.'),
    ('IFA Faro Hotel', 'Maspalomas, Gran Canaria', 'Un elegante hotel boutique con una ubicación privilegiada frente al faro de Maspalomas, ofreciendo vistas espectaculares y un ambiente tranquilo.');

-- Insertar datos ficticios de tipos de habitaciones
INSERT INTO room_types (type_name, description) VALUES
    ('Standard Room', 'Una habitación cómoda con todas las comodidades básicas.'),
    ('Deluxe Room', 'Una habitación espaciosa con vistas panorámicas y servicios adicionales.'),
    ('Suite', 'Una suite lujosa con sala de estar separada y terraza privada.');

-- Insertar datos ficticios de habitaciones en los hoteles
INSERT INTO rooms (hotel_id, type_id, price, description) VALUES
    ('<ID_HOTEL>', '<ID_TIPO_HABITACION>', 100.00, 'Habitación estándar con vistas al jardín.'),
    ('<ID_HOTEL>', '<ID_TIPO_HABITACION>', 150.00, 'Habitación deluxe con balcón y vistas al mar.'),
    ('<ID_HOTEL>', '<ID_TIPO_HABITACION>', 250.00, 'Suite de lujo con jacuzzi y terraza privada.');


-- Insertar datos ficticios de reservas
INSERT INTO reservations (user_id, room_id, check_in_date, check_out_date, total_price, status) VALUES
    ('<ID_USUARIO>', '<ID_HABITACION>', '2024-05-01', '2024-05-07', 600.00, 'confirmed'),
    ('<ID_USUARIO>', '<ID_HABITACION>', '2024-06-15', '2024-06-20', 450.00, 'pending');

