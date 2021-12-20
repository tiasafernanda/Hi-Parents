
import { POST_CHILD_BEGIN, POST_PARENTCHILD_BEGIN } from './types'


export const ChildAction = (body) => {
    return {
        type: POST_CHILD_BEGIN,
        body,
    };
};

export const ParentChildAction = (appointment_id) => {
    return {
        type: POST_PARENTCHILD_BEGIN,
        appointment_id,
    };
};
