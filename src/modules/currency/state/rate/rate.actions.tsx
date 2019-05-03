import {createAction} from "redux-actions";
import {PlainRate} from "../../model";

export const WatchCurrencyPairActionType = 'Rate/watch';
export const UnwatchCurrencyPairActionType = 'Rate/unwatch';

export const AddRateActionType = 'Rate/add';
export const UpdateRateActionType = 'Rate/update';
export const DeleteRateActionType = 'Rate/delete';

export const watchRateAction = createAction(WatchCurrencyPairActionType);
export const unwatchRateAction = createAction(UnwatchCurrencyPairActionType);

export const addRateAction = createAction<PlainRate>(AddRateActionType);
export const updateRateAction = createAction<PlainRate>(UpdateRateActionType);
export const deleteRateAction = createAction<string>(DeleteRateActionType);
