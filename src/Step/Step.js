import React from 'react'
import styles from "./Step.module.css"
import classnames from "classnames";
import Checkmark from "./Checkmark.svg"
 class Step extends React.PureComponent {
    circleClasses = (currentStepIndex) => {
        return classnames(styles.circle, {
            [styles.currentStep] : currentStepIndex >= this.props.numberOfStep,
         })
    }

    stepValue = (currentStepIndex) => {
        if(currentStepIndex > this.props.numberOfStep) {
            return <img src={Checkmark} alt="CHeckmark"></img>
        } else {
            return this.props.numberOfStep + 1
        }
    }

    lineClasses = (currentStepIndex) => {
        return classnames( styles.line, {
            [styles.passedLine] : currentStepIndex >= this.props.numberOfStep,
         })
    }
    
    removeLastWordTitle = (title) => {
        const lastIndex = title.lastIndexOf(" ");
        return title.substring(0, lastIndex);
    }
 
    
    render() {
       const {title, currentStepIndex} = this.props
        return (
            <>
            <div className={this.lineClasses(currentStepIndex)}></div>
            <div className={styles.stepWrapper}>
                <div className={this.circleClasses(currentStepIndex)}>
                    <span
                    >
                    {this.stepValue(currentStepIndex)}
                    </span>
                </div>
                <div className={styles.title}>
                <p>{this.removeLastWordTitle(title)}</p>
                </div>
            </div>
            </>
           
        )
    }
}

export default Step
