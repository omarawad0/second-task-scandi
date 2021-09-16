import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import { ContentWrapper } from 'Component/ContentWrapper/ContentWrapper.component';
import CheckoutProgress from 'src/CheckoutProgress/CheckoutProgress';
class Checkout extends SourceCheckout {

    renderSteps = () => {
        const {checkoutStep} = this.props
        return (
            <CheckoutProgress stepMap={this.stepMap} currentStep={checkoutStep}/>
        )
    }
    
    render() {
        
        return (
            <>
            
            <main block="Checkout">
                {this.renderSteps()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
            </>
        );
    }

    
}

export default Checkout