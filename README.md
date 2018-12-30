# React Click Outside
React Click Outside is a simple component that can be wrapped around JSX to provide a callback when the mouse is clicked outside of it. It is also possible to exclude elements from triggering the callback when clicked.

## Props
| Name | Type | Usage |
| --- | --- | --- |
| onClickOutside | `Function` | The functional called when the mouse is clicked outside of the wrapped element. Ignoring `ignoredRefs`. |
| domRef (Optional) | `ref` | If specified, this ref will be used instead of creating a new one and applied to the element |
| ignoreRefs (Optional) | Single or Array `ref` | Refs of elements that if clicked on won't fire the `onClickOutside` callback.

## Basic usage
Simply wrap the JSX with the `ClickOutside` and provide a function for the `onClickOutside` prop.

Example:
```
<ClickOutside onClickOutside={this.handleClickOutside}>
	<img src="cute-dog.png"/>
</ClickOutside>
```

## Advanced usage

### Custom Ref
If you want to provide your own ref, for example you already have a ref for the element you want to click outside. You can use the `domRef` prop. This ref will be applied to the child instead of creating a new one.

### Ignoring Clicks on Certain Elements
If you don't want the callback to be fired when certain elements were clicked on you can pass an array of refs or a single ref into the `ignoreRefs` prop.