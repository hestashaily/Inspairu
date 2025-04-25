
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.Ai_tool_mstrScalarFieldEnum = {
  id: 'id',
  name: 'name',
  is_active: 'is_active',
  created_datetime: 'created_datetime',
  updated_datetime: 'updated_datetime'
};

exports.Prisma.Blocked_commentsScalarFieldEnum = {
  comment_id: 'comment_id',
  user_id: 'user_id'
};

exports.Prisma.Comment_reactionScalarFieldEnum = {
  comment_id: 'comment_id',
  reacted_by: 'reacted_by',
  created_datetime: 'created_datetime'
};

exports.Prisma.Comment_replyScalarFieldEnum = {
  reply_id: 'reply_id',
  comment_id: 'comment_id',
  reply_by: 'reply_by',
  reply: 'reply',
  created_datetime: 'created_datetime',
  updated_datetime: 'updated_datetime',
  total_reaction: 'total_reaction'
};

exports.Prisma.Comment_reply_reactionScalarFieldEnum = {
  reply_id: 'reply_id',
  reacted_by: 'reacted_by',
  created_datetime: 'created_datetime'
};

exports.Prisma.CommentsScalarFieldEnum = {
  comment_id: 'comment_id',
  feed_id: 'feed_id',
  comment_by: 'comment_by',
  comment: 'comment',
  total_reaction: 'total_reaction',
  total_reply: 'total_reply',
  created_datetime: 'created_datetime',
  updated_datetime: 'updated_datetime'
};

exports.Prisma.Email_otp_verificationScalarFieldEnum = {
  email_id: 'email_id',
  OTP: 'OTP'
};

exports.Prisma.Feed_ai_toolScalarFieldEnum = {
  feed_id: 'feed_id',
  ai_tool_id: 'ai_tool_id'
};

exports.Prisma.FeedsScalarFieldEnum = {
  id: 'id',
  feed_uuid: 'feed_uuid',
  user_id: 'user_id',
  caption: 'caption',
  description: 'description',
  prompt: 'prompt',
  feed_type: 'feed_type',
  generated_text: 'generated_text',
  is_deleted: 'is_deleted',
  total_views_count: 'total_views_count',
  total_likes_count: 'total_likes_count',
  total_comments_count: 'total_comments_count',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ReactionsScalarFieldEnum = {
  feed_id: 'feed_id',
  reacted_by: 'reacted_by',
  created_datetime: 'created_datetime'
};

exports.Prisma.Report_feedsScalarFieldEnum = {
  feed_id: 'feed_id',
  blocked_by: 'blocked_by',
  message: 'message',
  created_datetime: 'created_datetime',
  updated_datetime: 'updated_datetime'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  uuhid: 'uuhid',
  first_name: 'first_name',
  last_name: 'last_name',
  username: 'username',
  email: 'email',
  password: 'password',
  auth_key: 'auth_key',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ViewsScalarFieldEnum = {
  feed_id: 'feed_id',
  viewed_by: 'viewed_by',
  created_datetime: 'created_datetime'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.AccountOrderByRelevanceFieldEnum = {
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.ai_tool_mstrOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.comment_replyOrderByRelevanceFieldEnum = {
  reply: 'reply'
};

exports.Prisma.commentsOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.email_otp_verificationOrderByRelevanceFieldEnum = {
  email_id: 'email_id',
  OTP: 'OTP'
};

exports.Prisma.feedsOrderByRelevanceFieldEnum = {
  feed_uuid: 'feed_uuid',
  caption: 'caption',
  description: 'description',
  prompt: 'prompt',
  generated_text: 'generated_text'
};

exports.Prisma.report_feedsOrderByRelevanceFieldEnum = {
  message: 'message'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
  uuhid: 'uuhid',
  first_name: 'first_name',
  last_name: 'last_name',
  username: 'username',
  email: 'email',
  password: 'password',
  auth_key: 'auth_key'
};
exports.feeds_feed_type = exports.$Enums.feeds_feed_type = {
  text: 'text',
  media: 'media'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  ai_tool_mstr: 'ai_tool_mstr',
  blocked_comments: 'blocked_comments',
  comment_reaction: 'comment_reaction',
  comment_reply: 'comment_reply',
  comment_reply_reaction: 'comment_reply_reaction',
  comments: 'comments',
  email_otp_verification: 'email_otp_verification',
  feed_ai_tool: 'feed_ai_tool',
  feeds: 'feeds',
  reactions: 'reactions',
  report_feeds: 'report_feeds',
  users: 'users',
  views: 'views'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
