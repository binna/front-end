import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from '@hapi/Joi';

const {ObjectId} = mongoose.Types;

export const checkObjectId = (ctx, next) => {
    const {id} = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400;
        return;
    }
    return next();
}


let postId = 1;     // id의 초기값이다.

// posts 배열 초기 데이터
const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용'
    }
];

/*  포스트 목록 조회
    GET /api/posts
    GET localhost:4000/api/posts
*/
export const list = async ctx => {

    const page = parseInt(ctx.query.page || '1', 10);

    if(page < 1) {
        ctx.status = 400;
        return;
    }

    try {
        const posts = await Post.find().sort({_id:-1})
        .limit(10)
        .skip((page - 1) * 10)
        .lean()
        .exec();
        const postCount = await Post.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body = posts.map(post => ({
            ...post,
            body:
            post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}}...`
        }))
    } catch(e) {
        ctx.throw(500, e);
    }
}

/*  포스트 작성
    POST /api/posts
    POST localhost:4000/api/posts -> JSON
*/
export const write = async ctx => {

    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required()
    })

    const result = schema.validate(ctx.request.body);
    if(result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const {title, body, tags} = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags
    })

    try {
        await post.save();
        ctx.body = post;
    } catch(e) {
        ctx.throw(500, e);
    }
}

/*  특정 포스트 조회
    GET /api/posts/:id
    GET localhost:4000/api/posts/60ac946c095365392c1bcd6f
*/
export const read = async ctx => {
    const {id} = ctx.params;
    // 주어진 id 값으로 포스트를 찾는다.
    // 파라미터로 받아온 값은 문자열 형식이므로 숫자로 변환하거나 비교할 id 값을 문자열로 변경해야 한다.
    try {
        const post = await Post.findById(id).exec();

        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(500, e);
    }
}

/*  특정 포스트 제거
    DELETE /api/posts/:id
    DELETE localhost:4000/api/posts/60ac946c095365392c1bcd6f
*/
export const remove = async ctx => {
    const {id} = ctx.params;
    
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;       // 성공은 했지만 응답한 데이터는 없음
    } catch(e) {
        ctx.throw(500, e);
    }
}

/*  특정 포스트 수정
    PATCH /api/posts/:id
    PATCH localhost:4000/api/posts/60ac946c095365392c1bcd6f
*/
export const update = async ctx => {
    const {id} = ctx.params;

    // write에서 사용한 schema, required()가 없음
    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string())
    }) 

    const result = schema.validate(ctx.request.body);
    if(result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            // new가 true일때, 업데이트 내용을 반환
            // new가 false일때, 업데이트 전 데이터를 반환
            new: true
        }).exec();

        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(500, e);
    }
} 