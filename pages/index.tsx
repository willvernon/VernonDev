import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

import PageContainer from '../components/PageContainer';
import BlogPostCard from '../components/BlogPostCard';

import VideoCard from '../components/ToolCard';
import Loading from '../components/Loading';
import Splash from '../components/Splash'

export default function Home() {
  return (
    <div>
      <Splash />
      {/* <Loading /> */}
    </div>
  );
}
