create database bookstore;

create table books (
id serial primary key,
title varchar(60) not null,
author varchar(60) not null,
year int
);

