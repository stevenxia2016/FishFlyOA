class Router {
	constructor() {
		this.callBack = () => {};
	}

	beforeEach(callBack) {
		if (callBack instanceof Function) this.callBack = callBack;
	}

	push(to) {
		this.callBack('navigateTo', to);
	}

	redirectTo(to) {
		this.callBack('redirectTo', to);
	}

	reLaunch(to) {
		this.callBack('reLaunch', to);
	}

	switchTab(to) {
		this.callBack('switchTab', to);
	}

	back(delta) {
		// #ifdef H5
		history.back();
		// #endif
		// #ifndef H5
		uni.navigateBack({
			delta
		});
		// #endif
	}
}

if (!global.$navrouter) {
  global.$navrouter = new Router();
}

export default global.$navrouter;
