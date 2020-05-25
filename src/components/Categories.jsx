import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Categories = ({setCategories,categoriesBy}) => (
        <Menu secondary>
            <Menu.Item
                active = {categoriesBy === 'all'} onClick={setCategories.bind(this,'all')}>
                Все продукты 
            </Menu.Item>
            <Menu.Item
                active = {categoriesBy === 'milk'} onClick={setCategories.bind(this,'milk')}>
                Молочные продукты
            </Menu.Item>
            <Menu.Item
                active = {categoriesBy === 'sugar'} onClick={setCategories.bind(this,'sugar')}>
                Кондитерские 
            </Menu.Item>
            <Menu.Item
                active = {categoriesBy === 'cheese'} onClick={setCategories.bind(this,'cheese')}>
                Твёрдые сыры
            </Menu.Item>
            <Menu.Item
                active = {categoriesBy === 'meat'} onClick={setCategories.bind(this,'meat')}>
                Мясные продукты 
            </Menu.Item>
            <Menu.Item
                active = {categoriesBy === 'bread'} onClick={setCategories.bind(this,'bread')}>
                Хлеб
            </Menu.Item>
            <Menu.Item className="search">
                <Input icon="search" placeholder="Введите запрос.."></Input>
            </Menu.Item>      
        </Menu>
);


export default Categories;