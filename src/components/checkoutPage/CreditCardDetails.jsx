// components
import FormInput from "../FormInput"
import CheckoutSubheader from "./CheckoutSubheader"

const CreditCardDetails = ({ cardDetails, setCardDetails }) => {
    // const handleInputDataCardDetails = (e) => {
    //     setCardDetails(prevState => ({
    //         ...prevState,
    //         [e.target.id]: e.target.value
    //     }))
    // }

    const handleInputDataCardDetails = (e) => {
        const { id, value } = e.target;

        let formattedValue = value;

        if (id === 'cardNumber') {
            formattedValue = value.replace(/\D/g, '').match(/.{1,4}/g)?.join(' ') || '';
        }

        if (id === 'secureCode' && value.length > 3) {
            formattedValue = value.slice(0, 3);
        }

        if (id === 'cardExpires') {
            formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1-$2');
        }

        setCardDetails(prevState => ({
            ...prevState,
            [id]: formattedValue
        }));
    };

    // console.log(cardDetails);    

    const { nameOnCard, cardNumber, secureCode, cardExpires } = cardDetails

    return (
        <div>
            {/* Page subheader - components */}
            <CheckoutSubheader textOne='Card Details' textTwo='CREDIT CARD' />

            {/* Form input - components */}
            <FormInput label='Name on card' name='nameOnCard' type='text' placeholder='Bruce Wayne' value={nameOnCard} required={true} onMutate={handleInputDataCardDetails} maxLength={25}/>
            <FormInput label='Card number' name='cardNumber' type='text' placeholder='1111 1111 1111 1111' value={cardNumber} required={true} onMutate={handleInputDataCardDetails} maxLength={19}/>
            <FormInput label='Secure code' name='secureCode' type='number' placeholder='123' value={secureCode} required={true} onMutate={handleInputDataCardDetails} maxLength={3}/>
            <FormInput label='Card expires' name='cardExpires' type='text' placeholder='01-25 ("-" will be added automatically)' value={cardExpires} required={true} onMutate={handleInputDataCardDetails} maxLength={5} />
        </div>
    )
}

export default CreditCardDetails