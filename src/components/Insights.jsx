import React, { useState } from 'react';
import "../styles/insights.css";
import all_img from '../assets/all.jpg'
import all01 from '../assets/all01.webp'
import all02 from '../assets/all02.webp'
import all03 from '../assets/all03.webp'

const data = [
  {
    'title': 'All',
    'img': all_img,
    'h3': 'Exploring Shopee Seller Fees in Malaysia, Just Testing',
    'date': 'August 24, 2023',
    'p': 'In Malaysia’s bustling e-commerce realm, Shopee Marketplace stands tall as a renowned dynamic hub for buyers and sellers. Shopee has reshaped online transactions, and delving into this landscape demands a...',
    'cards': [
      {
        'img': all01,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all02,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all03,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },
    ]
  },{
    'title': 'Business',
    'img': all_img,
    'h3': 'Exploring Shopee Seller Fees in ',
    'date': 'August 24, 2023',
    'p': 'In Malaysia’s bustling e-commerce realm, Shopee Marketplace stands tall as a renowned dynamic hub for buyers and sellers. Shopee has reshaped online transactions, and delving into this landscape demands a...',
    'cards': [
      {
        'img': all01,
        'h4': 'Online rtant Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all02,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all03,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },
    ]
  },{
    'title': 'Operations',
    'img': all_img,
    'h3': 'Exploring Shopee Seller  in Malaysia',
    'date': 'August 24, 2023',
    'p': 'In Malaysia’s bustling e-commerce realm, Shopee Marketplace stands tall as a renowned dynamic hub for buyers and sellers. Shopee has reshaped online transactions, and delving into this landscape demands a...',
    'cards': [
      {
        'img': all01,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all02,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all03,
        'h4': 'Online Selling in the : 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },
    ]
  },{
    'title': 'Outlook',
    'img': all_img,
    'h3': 'Exploring Shopee  Fees in Malaysia',
    'date': 'August 24, 2023',
    'p': 'In Malaysia’s bustling e-commerce realm, Shopee Marketplace stands tall as a renowned dynamic hub for buyers and sellers. Shopee has reshaped online transactions, and delving into this landscape demands a...',
    'cards': [
      {
        'img': all01,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all02,
        'h4': 'Online Selling in the Philippines: 6 Important  to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all03,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },
    ]
  },{
    'title': 'Growth',
    'img': all_img,
    'h3': ' Shopee Seller Fees in Malaysia',
    'date': 'August 24, 2023',
    'p': 'In Malaysia’s bustling e-commerce realm, Shopee Marketplace stands tall as a renowned dynamic hub for buyers and sellers. Shopee has reshaped online transactions, and delving into this landscape demands a...',
    'cards': [
      {
        'img': all01,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all02,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all03,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },
    ]
  },{
    'title': 'Case Studies',
    'img': all_img,
    'h3': 'Exploring  Seller Fees in Malaysia',
    'date': 'August 24, 2023',
    'p': 'In Malaysia’s bustling e-commerce realm, Shopee Marketplace stands tall as a renowned dynamic hub for buyers and sellers. Shopee has reshaped online transactions, and delving into this landscape demands a...',
    'cards': [
      {
        'img': all01,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all02,
        'h4': 'Online Selling in the Philippines: 6 Important Steps to E-commerce Success',
        'date': 'March 16, 2022'
      },{
        'img': all03,
        'h4': 'Online Selling in the Philippines: ',
        'date': 'March 16, 2022'
      },
    ]
  },
]

const Insights = () => {
  const [currentNav, setCurrentNav] = useState('All');
  
  return (
    <section className='insights'>
      <h2>Insights</h2>
      <ul className='insights--nav'>
        {data.map(({title}) => <li key={title} className={currentNav === title ? "insights--nav_active" : ""} onClick={() => setCurrentNav(title)}>{title}</li>)}
      </ul>
      {data.filter(({ title }) => title === currentNav).map(item => (
        <article className='insights--article'>
          <div className='insights--article_left'>
            <img src={item.img} />
            <h2>{item.h3}</h2>
            <p>{item.date}</p>
            <p>{item.p}</p>
          </div>
          <div className='insights--article_right'>
            {item.cards.map(card => (
              <div className='insights--article_right--card'>
                <img src={card.img} />
                <div>
                  <p>{card.h4}</p>
                  <p>{card.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button>Read More</button>
        </article>
      ))}
    </section>
  )
}

export default Insights