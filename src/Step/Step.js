import React, { Component } from 'react'
import styles from "./Step.module.css"
import classnames from "classnames";
 class Step extends Component {
    circleClasses = (currentStepIndex) => {
        return classnames(styles.circle, {
            [styles.currentStep] : currentStepIndex >= this.props.numberOfStep,
         })
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
                    {this.props.numberOfStep + 1}
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
