---
id: NavLinkProps
title: NavLinkProps
sidebar_label: NavLinkProps
---

```tsx
__type(props: ): CSSProperties
```
<br/>



### Properties

<font size="2"><i>(Mandatory properties are in bold)</i></font>

| Properties | Type | Description |
| --------- | ---- | ----------- |
| **isActive** | boolean |  |
| **isActive** | boolean |  |
| **isActive** | boolean |  |
| **to** | [To](/framework-api/types/To.md) |  |
| about | string |  |
| accessKey | string |  |
| aria-activedescendant | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. |
| aria-atomic | Booleanish | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. |
| aria-autocomplete | inline \| both \| none \| list | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made. |
| aria-busy | Booleanish | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. |
| aria-checked | boolean \| mixed \| false \| true | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. |
| aria-colcount | number | Defines the total number of columns in a table, grid, or treegrid. |
| aria-colindex | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. |
| aria-colspan | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. |
| aria-controls | string | Identifies the element (or elements) whose contents or presence are controlled by the current element. |
| aria-current | boolean \| location \| time \| false \| page \| true \| step \| date | Indicates the element that represents the current item within a container or set of related elements. |
| aria-describedby | string | Identifies the element (or elements) that describes the object. |
| aria-details | string | Identifies the element that provides a detailed, extended description for the object. |
| aria-disabled | Booleanish | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. |
| aria-dropeffect | link \| none \| copy \| move \| execute \| popup | Indicates what functions can be performed when a dragged object is released on the drop target. |
| aria-errormessage | string | Identifies the element that provides an error message for the object. |
| aria-expanded | Booleanish | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. |
| aria-flowto | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order. |
| aria-grabbed | Booleanish | Indicates an element's "grabbed" state in a drag-and-drop operation. |
| aria-haspopup | boolean \| grid \| dialog \| menu \| false \| listbox \| true \| tree | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. |
| aria-hidden | Booleanish | Indicates whether the element is exposed to an accessibility API. |
| aria-invalid | boolean \| false \| true \| grammar \| spelling | Indicates the entered value does not conform to the format expected by the application. |
| aria-keyshortcuts | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. |
| aria-label | string | Defines a string value that labels the current element. |
| aria-labelledby | string | Identifies the element (or elements) that labels the current element. |
| aria-level | number | Defines the hierarchical level of an element within a structure. |
| aria-live | off \| assertive \| polite | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. |
| aria-modal | Booleanish | Indicates whether an element is modal when displayed. |
| aria-multiline | Booleanish | Indicates whether a text box accepts multiple lines of input or only a single line. |
| aria-multiselectable | Booleanish | Indicates that the user may select more than one item from the current selectable descendants. |
| aria-orientation | horizontal \| vertical | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. |
| aria-owns | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship. |
| aria-placeholder | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format. |
| aria-posinset | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. |
| aria-pressed | boolean \| mixed \| false \| true | Indicates the current "pressed" state of toggle buttons. |
| aria-readonly | Booleanish | Indicates that the element is not editable, but is otherwise operable. |
| aria-relevant | all \| text \| additions \| additions removals \| additions text \| removals \| removals additions \| removals text \| text additions \| text removals | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. |
| aria-required | Booleanish | Indicates that user input is required on the element before a form may be submitted. |
| aria-roledescription | string | Defines a human-readable, author-localized description for the role of an element. |
| aria-rowcount | number | Defines the total number of rows in a table, grid, or treegrid. |
| aria-rowindex | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. |
| aria-rowspan | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. |
| aria-selected | Booleanish | Indicates the current "selected" state of various widgets. |
| aria-setsize | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. |
| aria-sort | none \| other \| ascending \| descending | Indicates if items in a table or grid are sorted in ascending or descending order. |
| aria-valuemax | number | Defines the maximum allowed value for a range widget. |
| aria-valuemin | number | Defines the minimum allowed value for a range widget. |
| aria-valuenow | number | Defines the current value for a range widget. |
| aria-valuetext | string | Defines the human readable text alternative of aria-valuenow for a range widget. |
| autoCapitalize | string |  |
| autoCorrect | string |  |
| autoSave | string |  |
| caseSensitive | boolean |  |
| children | ReactNode \|  |  |
| className | string \|  |  |
| color | string |  |
| contentEditable | inherit \| Booleanish |  |
| contextMenu | string |  |
| dangerouslySetInnerHTML |  |  |
| datatype | string |  |
| defaultChecked | boolean |  |
| defaultValue | string \| number \|  |  |
| dir | string |  |
| download | any |  |
| draggable | Booleanish |  |
| end | boolean |  |
| hidden | boolean |  |
| hrefLang | string |  |
| id | string |  |
| inlist | any |  |
| inputMode | search \| numeric \| none \| url \| text \| decimal \| tel \| email | Hints at the type of data that might be entered by the user while editing the element or its contents |
| is | string | Specify that a standard HTML element should behave like a defined custom built-in element |
| itemID | string |  |
| itemProp | string |  |
| itemRef | string |  |
| itemScope | boolean |  |
| itemType | string |  |
| lang | string |  |
| media | string |  |
| onAbort | ReactEventHandler<HTMLAnchorElement\> |  |
| onAbortCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onAnimationEnd | AnimationEventHandler<HTMLAnchorElement\> |  |
| onAnimationEndCapture | AnimationEventHandler<HTMLAnchorElement\> |  |
| onAnimationIteration | AnimationEventHandler<HTMLAnchorElement\> |  |
| onAnimationIterationCapture | AnimationEventHandler<HTMLAnchorElement\> |  |
| onAnimationStart | AnimationEventHandler<HTMLAnchorElement\> |  |
| onAnimationStartCapture | AnimationEventHandler<HTMLAnchorElement\> |  |
| onAuxClick | MouseEventHandler<HTMLAnchorElement\> |  |
| onAuxClickCapture | MouseEventHandler<HTMLAnchorElement\> |  |
| onBeforeInput | FormEventHandler<HTMLAnchorElement\> |  |
| onBeforeInputCapture | FormEventHandler<HTMLAnchorElement\> |  |
| onBlur | FocusEventHandler<HTMLAnchorElement\> |  |
| onBlurCapture | FocusEventHandler<HTMLAnchorElement\> |  |
| onCanPlay | ReactEventHandler<HTMLAnchorElement\> |  |
| onCanPlayCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onCanPlayThrough | ReactEventHandler<HTMLAnchorElement\> |  |
| onCanPlayThroughCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onChange | FormEventHandler<HTMLAnchorElement\> |  |
| onChangeCapture | FormEventHandler<HTMLAnchorElement\> |  |
| onClick | MouseEventHandler<HTMLAnchorElement\> |  |
| onClickCapture | MouseEventHandler<HTMLAnchorElement\> |  |
| onCompositionEnd | CompositionEventHandler<HTMLAnchorElement\> |  |
| onCompositionEndCapture | CompositionEventHandler<HTMLAnchorElement\> |  |
| onCompositionStart | CompositionEventHandler<HTMLAnchorElement\> |  |
| onCompositionStartCapture | CompositionEventHandler<HTMLAnchorElement\> |  |
| onCompositionUpdate | CompositionEventHandler<HTMLAnchorElement\> |  |
| onCompositionUpdateCapture | CompositionEventHandler<HTMLAnchorElement\> |  |
| onContextMenu | MouseEventHandler<HTMLAnchorElement\> |  |
| onContextMenuCapture | MouseEventHandler<HTMLAnchorElement\> |  |
| onCopy | ClipboardEventHandler<HTMLAnchorElement\> |  |
| onCopyCapture | ClipboardEventHandler<HTMLAnchorElement\> |  |
| onCut | ClipboardEventHandler<HTMLAnchorElement\> |  |
| onCutCapture | ClipboardEventHandler<HTMLAnchorElement\> |  |
| onDoubleClick | MouseEventHandler<HTMLAnchorElement\> |  |
| onDoubleClickCapture | MouseEventHandler<HTMLAnchorElement\> |  |
| onDrag | DragEventHandler<HTMLAnchorElement\> |  |
| onDragCapture | DragEventHandler<HTMLAnchorElement\> |  |
| onDragEnd | DragEventHandler<HTMLAnchorElement\> |  |
| onDragEndCapture | DragEventHandler<HTMLAnchorElement\> |  |
| onDragEnter | DragEventHandler<HTMLAnchorElement\> |  |
| onDragEnterCapture | DragEventHandler<HTMLAnchorElement\> |  |
| onDragExit | DragEventHandler<HTMLAnchorElement\> |  |
| onDragExitCapture | DragEventHandler<HTMLAnchorElement\> |  |
| onDragLeave | DragEventHandler<HTMLAnchorElement\> |  |
| onDragLeaveCapture | DragEventHandler<HTMLAnchorElement\> |  |
| onDragOver | DragEventHandler<HTMLAnchorElement\> |  |
| onDragOverCapture | DragEventHandler<HTMLAnchorElement\> |  |
| onDragStart | DragEventHandler<HTMLAnchorElement\> |  |
| onDragStartCapture | DragEventHandler<HTMLAnchorElement\> |  |
| onDrop | DragEventHandler<HTMLAnchorElement\> |  |
| onDropCapture | DragEventHandler<HTMLAnchorElement\> |  |
| onDurationChange | ReactEventHandler<HTMLAnchorElement\> |  |
| onDurationChangeCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onEmptied | ReactEventHandler<HTMLAnchorElement\> |  |
| onEmptiedCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onEncrypted | ReactEventHandler<HTMLAnchorElement\> |  |
| onEncryptedCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onEnded | ReactEventHandler<HTMLAnchorElement\> |  |
| onEndedCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onError | ReactEventHandler<HTMLAnchorElement\> |  |
| onErrorCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onFocus | FocusEventHandler<HTMLAnchorElement\> |  |
| onFocusCapture | FocusEventHandler<HTMLAnchorElement\> |  |
| onGotPointerCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onGotPointerCaptureCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onInput | FormEventHandler<HTMLAnchorElement\> |  |
| onInputCapture | FormEventHandler<HTMLAnchorElement\> |  |
| onInvalid | FormEventHandler<HTMLAnchorElement\> |  |
| onInvalidCapture | FormEventHandler<HTMLAnchorElement\> |  |
| onKeyDown | KeyboardEventHandler<HTMLAnchorElement\> |  |
| onKeyDownCapture | KeyboardEventHandler<HTMLAnchorElement\> |  |
| onKeyPress | KeyboardEventHandler<HTMLAnchorElement\> |  |
| onKeyPressCapture | KeyboardEventHandler<HTMLAnchorElement\> |  |
| onKeyUp | KeyboardEventHandler<HTMLAnchorElement\> |  |
| onKeyUpCapture | KeyboardEventHandler<HTMLAnchorElement\> |  |
| onLoad | ReactEventHandler<HTMLAnchorElement\> |  |
| onLoadCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onLoadedData | ReactEventHandler<HTMLAnchorElement\> |  |
| onLoadedDataCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onLoadedMetadata | ReactEventHandler<HTMLAnchorElement\> |  |
| onLoadedMetadataCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onLoadStart | ReactEventHandler<HTMLAnchorElement\> |  |
| onLoadStartCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onLostPointerCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onLostPointerCaptureCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onMouseDown | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseDownCapture | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseEnter | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseLeave | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseMove | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseMoveCapture | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseOut | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseOutCapture | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseOver | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseOverCapture | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseUp | MouseEventHandler<HTMLAnchorElement\> |  |
| onMouseUpCapture | MouseEventHandler<HTMLAnchorElement\> |  |
| onPaste | ClipboardEventHandler<HTMLAnchorElement\> |  |
| onPasteCapture | ClipboardEventHandler<HTMLAnchorElement\> |  |
| onPause | ReactEventHandler<HTMLAnchorElement\> |  |
| onPauseCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onPlay | ReactEventHandler<HTMLAnchorElement\> |  |
| onPlayCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onPlaying | ReactEventHandler<HTMLAnchorElement\> |  |
| onPlayingCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onPointerCancel | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerCancelCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerDown | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerDownCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerEnter | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerEnterCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerLeave | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerLeaveCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerMove | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerMoveCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerOut | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerOutCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerOver | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerOverCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerUp | PointerEventHandler<HTMLAnchorElement\> |  |
| onPointerUpCapture | PointerEventHandler<HTMLAnchorElement\> |  |
| onProgress | ReactEventHandler<HTMLAnchorElement\> |  |
| onProgressCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onRateChange | ReactEventHandler<HTMLAnchorElement\> |  |
| onRateChangeCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onReset | FormEventHandler<HTMLAnchorElement\> |  |
| onResetCapture | FormEventHandler<HTMLAnchorElement\> |  |
| onScroll | UIEventHandler<HTMLAnchorElement\> |  |
| onScrollCapture | UIEventHandler<HTMLAnchorElement\> |  |
| onSeeked | ReactEventHandler<HTMLAnchorElement\> |  |
| onSeekedCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onSeeking | ReactEventHandler<HTMLAnchorElement\> |  |
| onSeekingCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onSelect | ReactEventHandler<HTMLAnchorElement\> |  |
| onSelectCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onStalled | ReactEventHandler<HTMLAnchorElement\> |  |
| onStalledCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onSubmit | FormEventHandler<HTMLAnchorElement\> |  |
| onSubmitCapture | FormEventHandler<HTMLAnchorElement\> |  |
| onSuspend | ReactEventHandler<HTMLAnchorElement\> |  |
| onSuspendCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onTimeUpdate | ReactEventHandler<HTMLAnchorElement\> |  |
| onTimeUpdateCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onTouchCancel | TouchEventHandler<HTMLAnchorElement\> |  |
| onTouchCancelCapture | TouchEventHandler<HTMLAnchorElement\> |  |
| onTouchEnd | TouchEventHandler<HTMLAnchorElement\> |  |
| onTouchEndCapture | TouchEventHandler<HTMLAnchorElement\> |  |
| onTouchMove | TouchEventHandler<HTMLAnchorElement\> |  |
| onTouchMoveCapture | TouchEventHandler<HTMLAnchorElement\> |  |
| onTouchStart | TouchEventHandler<HTMLAnchorElement\> |  |
| onTouchStartCapture | TouchEventHandler<HTMLAnchorElement\> |  |
| onTransitionEnd | TransitionEventHandler<HTMLAnchorElement\> |  |
| onTransitionEndCapture | TransitionEventHandler<HTMLAnchorElement\> |  |
| onVolumeChange | ReactEventHandler<HTMLAnchorElement\> |  |
| onVolumeChangeCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onWaiting | ReactEventHandler<HTMLAnchorElement\> |  |
| onWaitingCapture | ReactEventHandler<HTMLAnchorElement\> |  |
| onWheel | WheelEventHandler<HTMLAnchorElement\> |  |
| onWheelCapture | WheelEventHandler<HTMLAnchorElement\> |  |
| ping | string |  |
| placeholder | string |  |
| prefix | string |  |
| property | string |  |
| radioGroup | string |  |
| referrerPolicy | HTMLAttributeReferrerPolicy |  |
| rel | string |  |
| reloadDocument | boolean |  |
| replace | boolean |  |
| resource | string |  |
| results | number |  |
| role | AriaRole |  |
| security | string |  |
| slot | string |  |
| spellCheck | Booleanish |  |
| state | any |  |
| style | CSSProperties \|  |  |
| suppressContentEditableWarning | boolean |  |
| suppressHydrationWarning | boolean |  |
| tabIndex | number |  |
| target | HTMLAttributeAnchorTarget |  |
| title | string |  |
| translate | yes \| no |  |
| type | string |  |
| typeof | string |  |
| unselectable | on \| off |  |
| vocab | string |  |
