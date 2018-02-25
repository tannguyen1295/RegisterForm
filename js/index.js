var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Input(props) {
    var style = {
        width: 165,
        height: 25
    };
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            props.title
        ),
        React.createElement("input", { style: style, name: props.name, value: props.value, onChange: props.handleChange })
    );
}

function Select(props) {
    var style = {
        width: 170,
        height: 30
    };
    var activities = ["Science Lab", "Swimming", "Cooking", "Painting"];
    var options = activities.map(function (item) {
        return React.createElement(
            "option",
            { value: item },
            item
        );
    });
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            props.title
        ),
        React.createElement(
            "select",
            { style: style, name: props.name, value: props.value, onChange: props.handleChange },
            options
        )
    );
}

function CheckBox(props) {
    var style = {
        display: "flex"
    };

    return React.createElement(
        "div",
        { style: style },
        React.createElement("input", { type: "checkbox", checked: props.checked, name: props.name, onChange: props.handleChange }),
        props.name,
        ") ",
        props.title
    );
}

function PostList(props) {
    var elements = [];
    var res = "";

    var _loop = function _loop(i) {
        member = props.list[i];


        if (member.a == "on") res += "a";
        if (member.b == "on") res += "b";
        if (member.c == "on") res += "c";
        elements.push(React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                React.createElement(
                    "button",
                    { id: i, onClick: function onClick() {
                            return props.remove(i);
                        } },
                    "x"
                )
            ),
            React.createElement(
                "td",
                null,
                member.fn
            ),
            React.createElement(
                "td",
                null,
                member.ln
            ),
            React.createElement(
                "td",
                null,
                member.act
            ),
            React.createElement(
                "td",
                null,
                res
            )
        ));
        res = "";
    };

    for (var i = 0; i < props.list.length; i++) {
        var member;

        _loop(i);
    }

    return React.createElement(
        "table",
        null,
        React.createElement(
            "tr",
            null,
            React.createElement(
                "th",
                null,
                "Remove"
            ),
            React.createElement(
                "th",
                null,
                "First Name"
            ),
            React.createElement(
                "th",
                null,
                "Last Name"
            ),
            React.createElement(
                "th",
                null,
                "Activity"
            ),
            React.createElement(
                "th",
                null,
                "Restriction"
            )
        ),
        elements
    );
}

function Button(props) {
    var style = {
        width: 170,
        height: 30
    };
    return React.createElement(
        "button",
        { style: style, onClick: props.addMember },
        "Submit"
    );
}

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { fn: "", ln: "", act: "", a: false, b: false, c: false, members: [] };
        return _this;
    }

    _createClass(App, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.setState(_defineProperty({}, event.target.name, event.target.value));
        }
    }, {
        key: "remove",
        value: function remove(index) {
            var membersCopy = this.state.members.slice();
            membersCopy.splice(index, 1);

            this.setState({ members: membersCopy });
        }
    }, {
        key: "addMember",
        value: function addMember() {
            var membersCopy = this.state.members.slice();
            membersCopy.push({ fn: this.state.fn, ln: this.state.ln, act: this.state.act, a: this.state.a, b: this.state.b, c: this.state.c });
            this.setState({ fn: "", ln: "", act: "", a: false, b: false, c: false, members: membersCopy });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Input, { title: "First Name", name: "fn", value: this.state.fn, handleChange: this.handleChange.bind(this) }),
                React.createElement(Input, { title: "Last Name", name: "ln", value: this.state.ln, handleChange: this.handleChange.bind(this) }),
                React.createElement(Select, { title: "Select Activity:", name: "act", value: this.state.act, handleChange: this.handleChange.bind(this) }),
                React.createElement(
                    "div",
                    null,
                    "Check all that apply:"
                ),
                React.createElement(CheckBox, { checked: this.state.a, handleChange: this.handleChange.bind(this), name: "a", title: "Dietary Restrictions" }),
                React.createElement(CheckBox, { checked: this.state.b, handleChange: this.handleChange.bind(this), name: "b", title: "Physical Disabilities" }),
                React.createElement(CheckBox, { checked: this.state.c, handleChange: this.handleChange.bind(this), name: "c", title: "Medical Needs" }),
                React.createElement(Button, { addMember: this.addMember.bind(this) }),
                React.createElement(PostList, { list: this.state.members, remove: this.remove.bind(this) })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));