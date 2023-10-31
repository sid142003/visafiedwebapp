// src/components/CardSlider.js

import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../components/Testimonialslider.css';

const CardSliderTestimonial = () => {
  const cardData = [
    {
      title: 'Card 1',
      text: 'This is the first card.',
    },
    {
      title: 'Card 2',
      text: 'This is the second card.',
    },
    {
      title: 'Card 3',
      text: 'This is the third card.',
    },
    {
      title: 'Card 4',
      text: 'This is the fourth card.',
    },
    // Add more card objects as needed
  ];

  return (
    <div className="testimonial-card-slider">
      <h1>Testimonials</h1>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={true}
        containerClass="containert"
        customTransition="transform 300ms ease-in-out"
        dotListClass=""
        focusOnSelect={true}
        infinite
        itemClass="testimonial-square-card"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
        }}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {cardData.map((item, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSliderTestimonial;
