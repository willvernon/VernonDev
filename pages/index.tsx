import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

import Container from '../components/PageContainer';
import BlogPostCard from '../components/BlogPostCard';

import VideoCard from '../components/ToolCard';
import Loading from '../components/Loading';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Loading />
    </Suspense>
  );
}
