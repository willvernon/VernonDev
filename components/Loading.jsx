import React, { Children } from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import ReactLoading from 'react-loading';

import Coffee from '../public/static/images/Coffee.Gif';

import Image from 'next/image';

//Use Default Options when using a Lottie Json file
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Coffee.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: undefined,
      done: undefined
    };
  }
  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ loading: true });
          setTimeout(() => {
            this.setState({ done: true });
          }, 1000);
        });
    }, 1200);
  }
  render() {
    return (
      <div>
        {!this.state.done ? (
          <div class=" fixed flex justify-center items-center h-[500rem] left-0 right-0 bottom-0 top-0 w-full z-1031 overflow-hidden bg-black">
            <span class="visually-hidden">
              
              <FadeIn>
                <Image
                  src={Coffee}
                  alt="Coffee"
                  height={400}
                  width={400}
                  quality={100}
                  className="rounded-full"
                />
              </FadeIn>
            </span>
          </div>
        ) : (
          <></>//Put what ever you want to load after the load screen currently setup as a overlay
        )}
      </div>
    );
  }
}
