import React from 'react';
import Card from './Card';
import './Card.css';

function features() {
  return (
      <div className="conta">
          <div className='contains'>
          <Card
            image ='https://lumiere-a.akamaihd.net/v1/images/p_beautyandthebeast1991_20488_592ec4b5.jpeg'
            title="BEAST AND THE BEAUTY"
            description="Beauty and the Beast is a story about a young prince that was cast under a spell. His spell could only be broken with true love. Through many ups and downs, he found love with Beauty, and she, in time, returned his love. They marry and the prince's spell is broken, and they live happily ever after."
            link="https://youtu.be/7JP3OnmWFtk?si=KCIWA3N1yoa7KE31"
            buttonText="PLAY NOW"
          />
      <Card
        image="https://wallpapercave.com/wp/wp10937749.jpg"
        title="CINDERELLA"
        description="A beautiful girl who was ill-treated by her stepmother and two step sisters. She is the protagonist, and in the end, she gets rewarded for her kindness and patience in the form of a good life with the prince."
        link="https://youtu.be/DgwZebuIiXc?si=coBSv-XB_kye1G_y"
        buttonText="PLAY NOW"
      />
      <Card
        image="https://images.moviesanywhere.com/8dfb682fcb8c3788fb2313d28fe77af3/5fd12096-b8b3-4131-9b11-65fe813909b7.jpg"
        title="SNOW WHITE AND THE SEVEN DWARFS"
        description="In the forest Snow White discovers a cottage inhabited by seven eccentric dwarfs, who warmly welcome her into their home after she offers to cook and clean for them. The queen eventually learns of Snow White's whereabouts and, disguising herself as an old hag, fatally poisons her stepdaughter with a tainted apple."
        link="https://youtu.be/TVD87stlv5k?si=6beQ5CFyzzTJupb8"
        buttonText="PLAY NOW"
      />
      <Card
        image="https://m.media-amazon.com/images/I/81ryVTYqB3L._AC_UF1000,1000_QL80_.jpg"
        title="MORAL STORIES"
        description="A moral story depicts practical situations excitingly and carries a message that imbibes moral values in the children. Different short moral stories teach different lessons to kids. The stories also make children responsible, respectful, empathetic, and honest from a very early age."
        link="https://youtu.be/TSjK7RZaRDw?si=5Y4sVnYrWHh5srjq"
        buttonText="PLAY NOW"
      />
      <Card
        image="https://m.media-amazon.com/images/I/61jlEThDe3L.jpg"
        title="SCARY STORIES"
        description="At their heart, scary stories share the qualities of any other story, including a main character with a goal and obstacles standing in that person's way. But they have several additional factors: a scary setting, creepy character(s), and a twist or “uh-oh” moment."
        link="https://youtu.be/6B1i5B89EGw?si=iwrOVxs8G12N_Rry"
        buttonText="PLAY NOW"
      />
      <Card
        image="https://m.media-amazon.com/images/I/71ZFiAa06iL._AC_UF1000,1000_QL80_.jpg"
        title="MYSTERY STORIES"
        description="Mystery stories revolve around a main character on a quest to solve a crime. Also known as a whodunit or detective story, a mystery creates intrigue by revealing the identity of the antagonist only at the climax of the story."
        link="https://youtu.be/vdFgcNigzNg?si=uJYBYVjt3_TsWeIh"
        buttonText="PLAY NOW"
      />
      <Card
        image="https://rukminim2.flixcart.com/image/850/1000/kffq2kw0/book/0/7/4/365-adventure-stories-original-imafvvxvjqwhacfk.jpeg?q=90&crop=false"
        title="ADVENTURE STORIES"
        description="Adventure stories are a genre that involve protagonists going on epic journeys. These journeys are most often geographical but may also include emotional and personal journeys and growth. The adventure, the goal of the quest at hand, must take center stage in an adventure story."
        link="https://youtu.be/vdFgcNigzNg?si=uJYBYVjt3_TsWeIh"
        buttonText="PLAY NOW"
      />
      <Card
        image="https://imgix.bustle.com/uploads/shutterstock/2023/1/2/2ac16dd6-eac2-48a8-86ec-b9558aeb8008-shutterstock-2094793924.jpg?w=360&h=460&fit=crop&crop=focalpoint&q=50&dpr=2&fp-x=0.6813&fp-y=0.6534"
        title="RHYMES"
        description="Perfect rhyme occurs when two words match exactly in sound. Imperfect rhyme means the words sound nearly alike, but not exactly. End rhyme describes words that rhyme at the ends of two lines of poetry. Internal rhyme happens when a word from the middle of a poetic line rhymes with a word at the end"
        link="https://youtu.be/z_OjROw5ES0?si=FrZlK6OMAjwfyJAK"
        buttonText="PLAY NOW"
      />
      {/* Add more Card components as needed */}
    </div>
    </div>
  );
}

export default features;
