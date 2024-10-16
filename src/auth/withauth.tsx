"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

function WithAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/');
    }
  }, [router]);

  return (
    <div></div>
  );
}

export default WithAuth;
