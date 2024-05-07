export const processPayment = async ({consultant, amount}:any) => {
    // Fetch the order from the server
    const orderResponse = await fetch('/api/createPayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: consultant.pricing }),
    });
    
    const orderData = await orderResponse.json();
  
    if (!orderResponse.ok) {
      alert('Failed to process payment, please try again.');
      return;
    }
  
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'Consultation Fee',
      description: 'Payment for consultant services',
      order_id: orderData.id,
      handler: function (response) {
        // handle the payment success, post to a success API or similar
        alert('Payment successful');
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'note value'
      },
      theme: {
        color: '#3399cc'
      }
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  export const openCalendlyPopup = ({consultant}:any) => {
    const url = `https://calendly.com/{calendly_username}/${consultant.calendlyEvent}?name=${encodeURIComponent(consultant.name)}`;
    window.open(url, '_blank');
  };
  