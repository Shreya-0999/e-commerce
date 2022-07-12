
export function loadScript (src){
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

export async function showRazorPay(amount, address, updateOrderList, cartItems, navigate) {
    const data = await fetch("https://online--eshop.herokuapp.com/razorpay", {
        method: "POST",
        body: JSON.stringify({
            amount: amount,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((t) => t.json());

    const options = {
        key: 'rzp_test_A9glIRKKrM5Tig',
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: address.FullName,
        description: 'Thank you and Keep Shopping.',
        image: 'https://online--eshop.herokuapp.com/logo.png',
        handler: function (response) {
            updateOrderList(cartItems, address, amount)
            navigate('/orderSuccessfull');
        },
        prefill: {
            name: 'Shreya',
            email: 'sdfdsjfh2@ndsfdf.com',
            phone_number: '9899999999'
        }
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
}

