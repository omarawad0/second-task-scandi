import React from 'react'
import styles from "./CheckoutProgress.module.css"
import Step from "../Step/Step"
export class CheckoutProgress extends React.PureComponent {
    renderSteps = () => {
        const {stepMap, currentStep} = this.props
        const currentStepIndex = Object.keys(stepMap).findIndex((key) => key === currentStep)

        return Object.keys(stepMap).map(function(key, index) {
            if(key !== "DETAILS_STEP") {
                const {title} = stepMap[key];
                return <Step key={key} title={title.value} currentStepIndex={currentStepIndex} numberOfStep={index}/>
            }
            return null;
            
          });
    }
    render() {
        return (
            <div className={styles.progressWrapper}>
                {this.renderSteps()}
                <div className={styles.line}></div>
            </div>
        )
    }
}

export default CheckoutProgress
