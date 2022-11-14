(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{409:function(t,s,a){t.exports=a.p+"assets/img/clean-code-1.8499fb44.png"},410:function(t,s,a){t.exports=a.p+"assets/img/clean-code-2.19bb04d0.png"},436:function(t,s,a){"use strict";a.r(s);var n=a(23),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"리액트-클린코드"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#리액트-클린코드"}},[t._v("#")]),t._v(" 리액트 클린코드")]),t._v(" "),n("h6",{attrs:{id:"toss-slash21-실무에서-바로-쓰는-frontend-clean-code-를-참고하여-작성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#toss-slash21-실무에서-바로-쓰는-frontend-clean-code-를-참고하여-작성"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=edWbHp_k_9Y&t=723s",target:"_blank",rel:"noopener noreferrer"}},[t._v("toss SLASH21 - 실무에서 바로 쓰는 Frontend Clean Code"),n("OutboundLink")],1),t._v(" 를 참고하여 작성")]),t._v(" "),n("h2",{attrs:{id:"클린-코드란"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#클린-코드란"}},[t._v("#")]),t._v(" 클린 코드란?")]),t._v(" "),n("ul",[n("li",[t._v("클린코드는 짧은 코드가 아니다.")]),t._v(" "),n("li",[n("u",[n("strong",[t._v("원하는 로직을 빠르게 찾을수 있는 코드!")])])])]),t._v(" "),n("h2",{attrs:{id:"원하는-로직을-빠르게-찾으려면"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#원하는-로직을-빠르게-찾으려면"}},[t._v("#")]),t._v(" 원하는 로직을 빠르게 찾으려면?")]),t._v(" "),n("ul",[n("li",[t._v("응집도\n"),n("blockquote",[n("p",[t._v("하나의 목적을 가진 코드가 흩뿌려져 있을 때 응집도를 높여 뭉쳐두어야 한다.")])])]),t._v(" "),n("li",[t._v("단일책임\n"),n("blockquote",[n("p",[t._v("함수가 여러가지의 일을 하고있을 때 단일책임 원칙에 따라 쪼개주어야 한다.")])])]),t._v(" "),n("li",[t._v("추상화\n"),n("blockquote",[n("p",[t._v("함수의 세부구현 단계가 제각각일때 추상화 단계를 조절하여 핵심 개념을 필요한 만큼만 노출한다.")])])])]),t._v(" "),n("h2",{attrs:{id:"예제를-통해-알아보자"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#예제를-통해-알아보자"}},[t._v("#")]),t._v(" 예제를 통해 알아보자")]),t._v(" "),n("ul",[n("li",[n("b",[t._v("기존 코드")])])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuestionPage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleQuestionSubmit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" 약관동의 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("약관동의_받아오기")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("약관동의"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("약관동의_팝업열기")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("질문전송")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("questionValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"질문이 등록되었어요."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("main"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("textarea placeholder"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"어떤 내용이 궁금한가요?"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button onClick"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("handleQuestionSubmit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("질문하기"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Button"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[t._v("질문하기 버튼을 클릭하면 유저의 약관동의 여부를 확인하고 필요시 팝업을 띄운다.")]),t._v(" "),n("li",[t._v("질문을 전송하고 성공시 alert을 띄우는 간단한 로직이다.")])]),t._v(" "),n("p",[t._v("이 코드에 새로운 기능추가 요건이 들어왔다고 가정해보자. 요건은 다음과 같다.")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("질문하기")]),t._v(" 버튼을 눌렀을 때 연결중인 전문가가 있다면,"),n("br"),t._v("\n그 정보를 보여주고 그 전문가에게 물어볼 수 있는 기능을 추가해주세요~")])]),t._v(" "),n("p",[t._v("과연 어떻게 할것인가 ?")]),t._v(" "),n("ol",[n("li",[t._v("버튼 클릭함수에서 연결중인 전문가가 있는지 확인하는 코드를 넣고 state 설정")]),t._v(" "),n("li",[t._v("return에는 state 조건에 따라 팝업 컴포넌트를 보여준다!")]),t._v(" "),n("li",[t._v("팝업 관련 핸들러 및 컴포넌트 추가")])]),t._v(" "),n("p",[t._v("이렇게 할거같다.")]),t._v(" "),n("ul",[n("li",[n("b",[t._v("수정 코드")])])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuestionPage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("popupOpened"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setPopupOpened"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.상태추가")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleQuestionSubmit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2. 연결중인 전문가 있으면 팝업 띄우도록 상태 설정")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" 연결전문가 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("연결전문가_받아오기")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("연결전문가 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPopupOpened")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" 약관동의 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("약관동의_받아오기")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("약관동의"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("약관동의_팝업열기")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("질문전송")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("questionValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"질문이 등록되었어요."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3. 팝업 버튼 클릭 핸들러 추가")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleMyExpertQuestionSubmit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("연결전문가_질문전송")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("questionValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 연결전문가"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("연결전문가"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("에게 질문이 등록되었어요.")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//add end")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("main"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("textarea placeholder"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"어떤 내용이 궁금한가요?"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button onClick"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("handleQuestionSubmit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("질문하기"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Button"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4. 팝업 컴포넌트 추가")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("popupOpened "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("연결전문가팝업 onSubmit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("handleMyExpertQuestionSubmit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"기능은-잘-동작하는데-나쁜-코드가-되었다"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#기능은-잘-동작하는데-나쁜-코드가-되었다"}},[t._v("#")]),t._v(" 기능은 잘 동작하는데... 나쁜 코드가 되었다")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("이유는?")]),t._v(" "),n("blockquote",[n("p",[t._v("1.하나의 목적을 위한 코드가 흩뿌려져 있다.")])]),t._v(" "),n("p",[t._v("표시한 코드가 모두 '연결 중인 전문가 팝업 관련 코드인데, 하나의 목적을 위한 코드가 흩뿌려져있다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(409),alt:"clearn-code1"}})]),t._v(" "),n("blockquote",[n("p",[t._v("2.하나의 함수가 여러 가지 일을 하고있다.")])]),t._v(" "),n("p",[t._v("기존에 있던 함수가 아래 3가지의 일을 하고있다.\n세부 구현을 모두 읽어야만 함수의 역할을 파악할 수 있는 문제가 있다.")]),t._v(" "),n("ul",[n("li",[t._v("연결전문가 받아오기")]),t._v(" "),n("li",[t._v("약관동의 받아오기")]),t._v(" "),n("li",[t._v("질문전송")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(410),alt:"clearn-code1"}})]),t._v(" "),n("blockquote",[n("p",[t._v("3.함수의 세부 구현단계가 제각각이다.")])]),t._v(" "),n("ul",[n("li",[t._v("handleQuestionSubmit()")]),t._v(" "),n("li",[t._v("handleMyExpertQuestionSubmit()")])]),t._v(" "),n("p",[t._v("이 두 함수는 모두 이벤트 핸들링 관련 함수이나, handleQuestionSubmit은 3가지의 일을 담당하고있다.")])])]),t._v(" "),n("h2",{attrs:{id:"기능을-추가하면서-엉망이-되었다-리팩토링-해보자"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#기능을-추가하면서-엉망이-되었다-리팩토링-해보자"}},[t._v("#")]),t._v(" 기능을 추가하면서 엉망이 되었다.. 리팩토링 해보자")]),t._v(" "),n("ul",[n("li",[n("b",[t._v("리팩토링 코드")])])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuestionPage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" 연결전문가 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useFetch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("연결전문가_받아오기"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1. 함수의 세부 구현단계 일치시키기")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleNewExpertQuestionSubmit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("질문전송")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("questionValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"질문이 등록되었어요."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleMyExpertQuestionSubmit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("연결전문가_질문전송")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("questionValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 연결전문가"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("연결전문가"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("에게 질문이 등록되었어요.")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("main"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("textarea placeholder"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"어떤 내용이 궁금한가요?"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 하나의 목적인 코드 뭉치기\n            기존에는 팝업을 여는 버튼과 팝업 코드가 떨어져 있었는데"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 이를 하나로\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("연결전문가"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PopupTriggerButton\n                    popup"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("연결전문가팝업\n                            onSubmit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("handleMyExpertQuestionSubmit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    질문하기\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("PopupTriggerButton"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button onClick"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("openPopupToNotAgreedUsers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleMyExpertQuestionSubmit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("질문하기"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Button"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 함수 하나에서 하나의 일만 하도록 쪼개기")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("openPopupToNotAgreedUsers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" 약관동의 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("약관동의_받아오기")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("약관동의"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("약관동의_팝업열기")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("[내용 추가 중]")]),t._v(" "),n("p",[t._v("코드가 이전보다 길어졌지만 원하는 로직을 빠르게 찾을 수 있다."),n("br"),t._v("\n이는 앞서 살펴본 응집도/단일책임/추상화 측면에서 리팩토링을 진행한 결과이다.")]),t._v(" "),n("h1",{attrs:{id:"정리"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#정리"}},[t._v("#")]),t._v(" 정리")]),t._v(" "),n("h2",{attrs:{id:"클린코드는-짧은-코드가-아닌"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#클린코드는-짧은-코드가-아닌"}},[t._v("#")]),t._v(" 클린코드는 짧은 코드가 아닌")]),t._v(" "),n("ul",[n("li",[t._v("코드 파악/디버깅/리뷰 측면에서 유지보수 시간을 단축 시킬 수 있도록 하는 깔끔한 코드를 의미한다.")]),t._v(" "),n("li",[t._v("이를 위해 응집도/단일책임/추상화를 고려하여 코드를 작성해야한다.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);