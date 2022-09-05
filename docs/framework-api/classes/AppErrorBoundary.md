---
id: AppErrorBoundary
title: AppErrorBoundary
sidebar_label: AppErrorBoundary
---



### Properties

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **props** | Readonly<AppErrorBoundaryProps\> |  |
| **state** | Readonly<AppErrorBoundaryState\> |  |
| context | unknown | If using the new style context, re-declare this in your class to be the<br/><code>React.ContextType</code> of your <code>static contextType</code>.<br/>Should be used with type annotation or static contextType.<br/><br/><pre>static contextType = MyContext<br/>// For TS pre-3.7:<br/>context!: React.ContextType<typeof MyContext\><br/>// For TS 3.7 and above:<br/>declare context: React.ContextType<typeof MyContext\></pre> |
| contextType | Context<any\> | If set, <code>this.context</code> will be set at runtime to the current value of the given Context.<br/><br/>Usage:<br/><br/><pre>type MyContext = number<br/>const Ctx = React.createContext<MyContext\>(0)<br/><br/>class Foo extends React.Component {<br/>  static contextType = Ctx<br/>  context!: React.ContextType<typeof Ctx\><br/>  render () {<br/>    return <\>My context's value: {this.context}</\>;<br/>  }<br/>}</pre> |
| refs |  |  |


### Methods

| Methods | Signature | Description |
| --------- | ---- | ----------- |
| **componentDidCatch** | componentDidCatch(error: Error,errorInfo: ErrorInfo): void |  |
| **forceUpdate** | forceUpdate(callback: ): void |  |
| **getDerivedStateFromError** | getDerivedStateFromError():  |  |
| **render** | render(): ReactNode |  |
| **setState** | setState<K\>(state: null \| AppErrorBoundaryState \|  \| Pick<AppErrorBoundaryState, K\>,callback: ): void |  |
| componentDidMount | componentDidMount(): void | Called immediately after a component is mounted. Setting state here will trigger re-rendering. |
| componentDidUpdate | componentDidUpdate(prevProps: Readonly<AppErrorBoundaryProps\>,prevState: Readonly<AppErrorBoundaryState\>,snapshot: any): void | Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null. |
| componentWillMount | componentWillMount(): void | Called immediately before mounting occurs, and before `Component#render`.  
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps  
prevents this from being invoked. |
| componentWillReceiveProps | componentWillReceiveProps(nextProps: Readonly<AppErrorBoundaryProps\>,nextContext: any): void | Called when the component may be receiving new props.  
React may call this even if props have not changed, so be sure to compare new and existing  
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps  
prevents this from being invoked. |
| componentWillUnmount | componentWillUnmount(): void | Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as  
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`. |
| componentWillUpdate | componentWillUpdate(nextProps: Readonly<AppErrorBoundaryProps\>,nextState: Readonly<AppErrorBoundaryState\>,nextContext: any): void | Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps  
prevents this from being invoked. |
| getSnapshotBeforeUpdate | getSnapshotBeforeUpdate(prevProps: Readonly<AppErrorBoundaryProps\>,prevState: Readonly<AppErrorBoundaryState\>): any | Runs before React applies the result of `render` to the document, and  
returns an object to be given to componentDidUpdate. Useful for saving  
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated  
lifecycle events from running. |
| shouldComponentUpdate | shouldComponentUpdate(nextProps: Readonly<AppErrorBoundaryProps\>,nextState: Readonly<AppErrorBoundaryState\>,nextContext: any): boolean | Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.  
`PureComponent` implements a shallow comparison on props and state and returns true if any  
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`  
and `componentDidUpdate` will not be called. |
| UNSAFE_componentWillMount | UNSAFE_componentWillMount(): void | Called immediately before mounting occurs, and before `Component#render`.  
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps  
prevents this from being invoked. |
| UNSAFE_componentWillReceiveProps | UNSAFE_componentWillReceiveProps(nextProps: Readonly<AppErrorBoundaryProps\>,nextContext: any): void | Called when the component may be receiving new props.  
React may call this even if props have not changed, so be sure to compare new and existing  
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps  
prevents this from being invoked. |
| UNSAFE_componentWillUpdate | UNSAFE_componentWillUpdate(nextProps: Readonly<AppErrorBoundaryProps\>,nextState: Readonly<AppErrorBoundaryState\>,nextContext: any): void | Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps  
prevents this from being invoked. |
