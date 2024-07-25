paypal.Buttons({
    createOrder: async function(data, actions) {
        return await fetch('/api/v1/orders', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(res) {
            return res.json();
        }).then(function(orderData) {
            return orderData.id;  // Devolver el ID de la orden
        }).catch(function(error) {
            console.error('Error creating order:', error);
            throw error;
        });
    },
    onApprove: async function(data, actions) {
        return await fetch(`/api/v1/orders/${data.orderID}/capture`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(res) {
            return res.json();
        }).then(function(orderData) {
            console.log('Order captured successfully:', orderData);
            // Manejar la lógica después de la captura de la orden
        }).catch(function(error) {
            console.error('Error capturing order:', error);
            throw error;
        });
    },
    onError: function(err) {
        console.error('An error prevented the buyer from checking out with PayPal', err);
    }
}).render('#paypal-button-container');