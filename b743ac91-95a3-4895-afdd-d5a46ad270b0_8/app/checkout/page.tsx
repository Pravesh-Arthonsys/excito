'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { createOrder } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, totalItems, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    try {
      await createOrder({ ...form, items: items.map(i => ({
        product: i.product.id,
        quantity: i.quantity,
        size: i.size,
        color: i.color,
      })) });
      clearCart();
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Failed to create order');
    }
  };

  if (items.length === 0) {
    return <p className="text-center py-16">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" required placeholder="First Name" value={form.first_name}
            onChange={e => setForm({ ...form, first_name: e.target.value })}
            className="border px-3 py-2 rounded w-full" />
          <input type="text" required placeholder="Last Name" value={form.last_name}
            onChange={e => setForm({ ...form, last_name: e.target.value })}
            className="border px-3 py-2 rounded w-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="email" required placeholder="Email" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="border px-3 py-2 rounded w-full" />
          <input type="tel" required placeholder="Phone" value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className="border px-3 py-2 rounded w-full" />
        </div>
        <input type="text" required placeholder="Address Line 1" value={form.address_line1}
          onChange={e => setForm({ ...form, address_line1: e.target.value })}
          className="border px-3 py-2 rounded w-full" />
        <input type="text" placeholder="Address Line 2" value={form.address_line2}
          onChange={e => setForm({ ...form, address_line2: e.target.value })}
          className="border px-3 py-2 rounded w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" required placeholder="City" value={form.city}
            onChange={e => setForm({ ...form, city: e.target.value })}
            className="border px-3 py-2 rounded w-full" />
          <input type="text" required placeholder="State" value={form.state}
            onChange={e => setForm({ ...form, state: e.target.value })}
            className="border px-3 py-2 rounded w-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" required placeholder="Postal Code" value={form.postal_code}
            onChange={e => setForm({ ...form, postal_code: e.target.value })}
            className="border px-3 py-2 rounded w-full" />
          <input type="text" required placeholder="Country" value={form.country}
            onChange={e => setForm({ ...form, country: e.target.value })}
            className="border px-3 py-2 rounded w-full" />
        </div>
        <button type="submit" className="w-full bg-black text-white py-3 rounded font-medium">Place Order</button>
      </form>
    </div>
  );
}