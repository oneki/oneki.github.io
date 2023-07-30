---
id: WizardService
title: WizardService
sidebar_label: WizardService
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **state** | S |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **activate** | activate(uid: string): void |  |
| **activateNext** | activateNext(): void |  |
| **activatePrevious** | activatePrevious(): void |  |
| **callSaga** | callSaga(sagaName: string,args: ): void |  |
| **disable** | disable(uid: string): void |  |
| **done** | done(): void |  |
| **enable** | enable(uid: string): void |  |
| **getCurrentActiveIndex** | getCurrentActiveIndex(): number |  |
| **getCurrentStep** | getCurrentStep(): undefined \| M |  |
| **getMember** | getMember(uid: string): undefined \| M |  |
| **getNextStep** | getNextStep(): undefined \| M |  |
| **getPreviousStep** | getPreviousStep(): undefined \| M |  |
| **hide** | hide(uid: string): void |  |
| **initMember** | initMember(state: M): void |  |
| **isCurrentStepInError** | isCurrentStepInError(): boolean |  |
| **isCurrentStepInVisibleError** | isCurrentStepInVisibleError(): boolean |  |
| **isFirstStep** | isFirstStep(): boolean |  |
| **isLastStep** | isLastStep(): boolean |  |
| **next** | next(): void |  |
| **onValidationChange** | onValidationChange(uid: string,touchedValidation: default,allValidation: default): void |  |
| **previous** | previous(): void |  |
| **remove** | remove(uid: string): void |  |
| **setClosable** | setClosable(uid: string,closable: boolean): void |  |
| **setError** | setError(uid: string,message: null \| string): void |  |
| **setIcon** | setIcon(uid: string,icon: ReactNode): void |  |
| **setLoading** | setLoading(uid: string,loading: boolean): void |  |
| **setSubmitting** | setSubmitting(submitting: boolean): void |  |
| **setTitle** | setTitle(uid: string,title: string): void |  |
| **setWarning** | setWarning(uid: string,message: null \| string): void |  |
| **show** | show(uid: string): void |  |
| **touched** | touched(uid: string): void |  |
| **touching** | touching(uid: string): void |  |
