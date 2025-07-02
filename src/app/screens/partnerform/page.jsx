'use client';
import React from 'react';
import PartnerForm from './PartnerForm'; // If both files are in the same folder

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-10">
      <PartnerForm />
    </div>
  );
}
